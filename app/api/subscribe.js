import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: "bd37a170570cdb0b02c40f1b49eb02ec-us21",
  server: "us21",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const response = await mailchimp.lists.addListMember("33fadebce6", {
        email_address: email,
        status: "subscribed",
      });
      res.status(200).json({
        success: true,
        message: `Successfully added contact as an audience member. The contact's id is ${response.id}.`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error adding contact to the audience.",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
