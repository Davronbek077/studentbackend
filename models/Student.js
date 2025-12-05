import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },

  group_id: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },

  fatherName: { type: String },
  fatherPhone: { type: String },

  motherName: { type: String },
  motherPhone: { type: String },

    paymentStatus: {
      type: String,
      enum: ["Qilingan", "Qilinmagan"],
      default: "Qilinmagan"
    },
  
    notes: {
      type: String,
      default: ""
    }
},
 { timestamps: true});

export default mongoose.model("Student", studentSchema);
