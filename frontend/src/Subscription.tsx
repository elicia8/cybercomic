import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
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
  },
];

export default function Subscription() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-20">
        <h1 className="xlarge relative mt-10">Subscription</h1>
        <div className="flex gap-4 mx-4">
          {subscriptions.map((subscription) => (
            <Card
              className="relative flex gap-2 justify-center bg-[var(--bg-secondary)] p-4"
              key={subscription.title}
            >
              <CardHeader>
                <CardTitle className="keania large">
                  {subscription.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2 text-left">
                  {subscription.description.map((desc) => (
                    <li key={desc.content}>- {desc.content}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
