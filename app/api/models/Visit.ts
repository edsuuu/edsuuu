import mongoose, { Document, Schema } from "mongoose";

export interface IVisit extends Document {
    ip: string;
    city?: string;
    region?: string;
    country?: string;
    loc?: string;
    isp?: string;
    userAgent?: string;
    timestamp: Date;
}

const VisitSchema: Schema = new Schema({
    ip: { type: String, required: true },
    city: { type: String },
    region: { type: String },
    country: { type: String },
    loc: { type: String }, // "lat,lng"
    isp: { type: String },
    userAgent: { type: String },
    timestamp: { type: Date, default: Date.now },
});

// Ensure we don't redefine the model if it already exists
export default mongoose.models.Visit || mongoose.model<IVisit>("Visit", VisitSchema);
