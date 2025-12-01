import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },

        groupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group",
            required: true
        },

        month: {
            type: String,
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        date: {
            type :String,
            required: true
        },

        duration: {
            type: Number,
            required: true
        }

    }
);

export default mongoose.model("Payment", paymentSchema);