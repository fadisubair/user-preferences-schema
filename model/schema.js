const mongoose = require('mongoose');
const { Schema } = mongoose;


const reviewSchema = new Schema(
  {
    reviewerName: {
      type: String,
      required: [true, 'Reviewer name is required'],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Minimum rating is 1'],
      max: [5, 'Maximum rating is 5'],
    },
    comment: {
      type: String,
      trim: true,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  { versionKey: false }
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['electronics', 'fashion', 'home', 'books'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price must be at least 1 INR'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    releaseDate: {
      type: Date,
      default: null,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

/* =========================
   Model Compilation
   ========================= */
const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { Product, Review };
