import Payment from "../models/Payment";

// UPDATE PAYMENT
export const updatePayment = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment topilmadi" });
    }

    res.json(updatedPayment);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Serverda xatolik" });
  }
};
