import ATEM from "applest-atem";
export default async function handler(req, res) {
    const { id } = req.query;
    var atem = await new ATEM();
    await atem.connect('192.168.0.3');
    await atem.changePreviewInput(parseInt(id));
    res.status(200).json({ id });
  }