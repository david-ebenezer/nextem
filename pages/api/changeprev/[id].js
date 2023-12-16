import ATEM from "applest-atem";

export default function handler(req, res) {
  const { id } = req.query;
  
  new ATEM()
    .then(atem => {
      return atem.connect('192.168.0.3')
        .then(() => atem.changePreviewInput(parseInt(id)))
        .then(() => {
          res.status(200).json({ id });
        })
        .catch(error => {
          res.status(500).json({ error: error.message });
        });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
}
