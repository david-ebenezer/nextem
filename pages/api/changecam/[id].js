import ATEM from "applest-atem";
export default function handler(req, res) {
    const { id } = req.query;
    var atem = new ATEM();
    atem.connect('192.168.0.2');
    atem.changeProgramInput(1);
    res.status(200).json({ id });
  }