const crops = require("../../farmer/model/cropModel")



const getAllcrops = async (re,res) =>{
    const Crops = await crops.find({}).sort({createdAt: -1})
    res.status(200).json(Crops)
}

// Get all crops, optionally filtered by category
const getCropsByCategory = async (req, res) => {
  try {
    // Retrieve categoryId from query parameters
    const categoryId = req.query.categoryId;

    // If a categoryId is provided, filter crops by that category
    let filter = {};
    if (categoryId) {
      filter.categoryID = categoryId;
    }

    // Find crops based on filter criteria
    const crops = await crops.find(filter);

    if (!crops.length) {
      return res.status(404).json({ message: 'No crops found' });
    }

    res.status(200).json(crops);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getCropsByCategory,
  getAllcrops
};
