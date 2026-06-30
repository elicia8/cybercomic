import { Button } from "./components/ui/button";
import Layout from "./Layout";
const subscriptions = [
  {
    title: "Free",
    description: [
      {
        content: "Unlimited access to basic course from Course 1 for one year",
      },
      {
        content: "Free achievement and certificate from Course 1",
      },
      {
        content: "Limited access to user character customization",
      },
      {
        content: "No access to side and hidden quest",
      },
      {
        content: "No access to professional tutor",
      },
    ],
    price: "FREE! Starts Now!",
  },
  {
    title: "Premium",
    description: [
      {
        content:
          "Unlimited access to premium course from Course 1-5 for one year",
      },
      {
        content: "Free achievement and certificate from Course 1-5",
      },
      {
        content: "Unlimited access to basic user character customization",
      },
      {
        content: "No access to side and hidden quest",
      },
      {
        content: "Five times access to professional tutor (one hour/ each)",
      },
    ],
    price: "6,500,000/Year"
  },
  {
    title: "Supreme",
    description: [
      {
        content:
          "Unlimited access to supreme course from Course 1-10 for one year",
      },
      {
        content: "Free achievement and certificate from Course 1-10",
      },
      {
        content: "Unlimited access to side and hidden quest",
      },
      {
        content: "Unlimited access to basic user character customization",
      },
      {
        content:
          "Special items achieved for character customization from hidden quest",
      },
      {
        content: "Ten times access to professional tutor (one hour/each)",
      },
    ],
    price: "10,000,000/Lifetime",
  },
];

export default function Subscription() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-20">
        <h1 className="xlarge relative mt-10 text-glow">Subscription</h1>
        <div className="flex gap-4 mx-4">
          <div
            className="relative grid grid-cols-1 md:grid-cols-3
    border-t-3 border-[var(--bg-accent)]
    divide-y md:divide-y-0 md:divide-x-3
    divide-[var(--bg-accent)]"
          >
            {subscriptions.map((subscription) => (
              <div key={subscription.title} className="px-4 flex flex-col gap-3">
                <h2 className="keania large text-left">{subscription.title}</h2>

                <div className="h-95">
                  <ul className="flex flex-col gap-2 text-left">
                    {subscription.description.map((desc) => (
                      <li key={desc.content}>- {desc.content}</li>
                    ))}
                  </ul>
                </div>
                <Button className="btn2 text-glow">{subscription.price}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
