import Stripe from "stripe";
import { plans } from "../server/plans.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { planId } = req.body || {};
  const plan = plans[planId];

  if (!plan) {
    return res.status(400).json({ error: "Invalid plan" });
  }

  // Build the absolute origin from the request so success/cancel URLs work for
  // both the production domain and Vercel preview deployments.
  const origin =
    req.headers.origin ||
    (req.headers.host ? `https://${req.headers.host}` : "");

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: plan.currency,
            product_data: {
              name: plan.name,
              description: plan.description,
            },
            unit_amount: plan.amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/promotions?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/promotions?status=canceled`,
      metadata: { planId },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err.message);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}
