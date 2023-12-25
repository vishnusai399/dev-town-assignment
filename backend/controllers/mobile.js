import MobileModel from "../models/mobileSchema.js";

export const getMobiles = async (req, res) => {
  try {
    const { brand, processor, price, os, memory, type } = req.query;

    if (!brand || !processor || !price || !os || !memory || !type) {
      return res.status(400).json({ message: "Bad Request", status: "Fail" });
    }

    let filters = {};

    // applying filters
    if (brand !== "all") {
      filters["brand"] = brand;
    }

    if (processor !== "all") {
      filters["chip"] = processor;
    }

    if(os !== "all"){
      filters["os"] = os
    }

    if(memory !== "all"){
      filters["memory"] = memory
    }

    if(type !== "all"){
      filters["type"] = type
    }

    // for price different categories
    if (price === "1k-10k") {
      filters["price"] = { $lte: 10000, $gte: 1000 };
    }

    if (price === "10k-20k") {
      filters["price"] = { $lte: 20000, $gte: 10000 };
    }

    if (price === "above 20k") {
      filters["price"] = { $gt: 20000 };
    }

    console.log(filters);
    const mobileData = await MobileModel.find(filters);
    return res
      .status(200)
      .json({
        mobileData,
        message: "Successfully fetched data",
        status: "Success",
      });
  } catch (error) {
    console.error("Error fetching mobile data:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: "Fail" });
  }
};

export const filterMobile = async (req, res) => {
  try {
    const mobileId = req.params.id;

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(mobileId)) {
      return res
        .status(400)
        .json({ error: "Invalid ObjectId format", status: "Fail" });
    }

    // Find the mobile data by ID
    const mobile = await MobileModel.findById(mobileId);

    if (!mobile) {
      return res
        .status(404)
        .json({ error: "Mobile data not found", status: "Fail" });
    }

    return res
      .status(200)
      .json({
        mobile,
        message: "Successfully fetched mobile complete details",
        status: "Success",
      });
  } catch (error) {
    console.error("Error fetching mobile data by ID:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: "Fail" });
  }
};

export const uploadNewMobile = async (req, res) => {
  try {
    // Extract properties from the request body
    const { brand, model, price, color, image, type, processor, memory, os, chip } =
      req.body;

    //FIXME: valiidate body details

    const mobile = new MobileModel({
      brand,
      model,
      price,
      color,
      image,
      type,
      processor,
      memory,
      os,
      chip
    });

    await mobile.save();

    return res
      .status(201)
      .json({ message: "Mobile data saved successfully", status: "Success" });
  } catch (error) {
    console.error("Error saving mobile data:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: "Fail" });
  }
};
