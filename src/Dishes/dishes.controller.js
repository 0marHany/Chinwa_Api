const { Dishes } = require("./dishes.model")

const getAllDishes = async (req, res) => {
    try {
        const { category } = req.query;
        console.log(category);
        if (category) {
            const data = await Dishes.find({ categories: category });
            res.json({ message: "sucssess", data })
        } else {
            const data = await Dishes.find({});
            res.json({ message: "sucssess", data })
        }
    } catch (error) {
        res.status(400).json({ message: "some issues", error: error.message })
    }
}
const getDishe= async(req,res)=>{
    const id = req.params.id;;
    const data = await Dishes.find({ _id: id });
    res.json({ message: "sucssess", data })
}
const addDishe = async (req, res) => {
    try {
        const { categories, disheName, ingredients, price } = req.body
        const newDish = new Dishes({
            categories, disheName, ingredients, price,
            dishImg: `https://chinwa-api-5emg.vercel.app/${req.file.path}`
        })
        await newDish.save()
        res.status(200).json({ message: "sucssess", newDish })
    } catch (error) {
        res.status(400).json({ message: "some issues", error: error.message })
    }
}
const updateDishe = async (req, res) => {
    try {
        const { id } = req.params;
        const { categories, disheName, ingredients, price } = req.body;
        const data = await Dishes.updateOne({ _id: id, },
            { categories, disheName, ingredients})
        res.status(200).json({ message: "sucssess", data })
    } catch (error) {
        res.status(400).json({ message: "some issues", error: error.message })
    }
}
const deleteDishe = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const data = await Dishes.deleteOne({ _id: id, })
        res.status(200).json({ message: "sucssess", data })
    } catch (error) {
        res.status(400).json({ message: "some issues", error: error.message })
    }
}
const deleteAllDishes = async (req, res) => {
    try {
        const data = await Dishes.deleteMany({})
        res.status(200).json({ message: "sucssess", data })
    } catch (error) {
        res.status(400).json({ message: "some issues", error: error.message })
    }
}
module.exports = { getAllDishes, addDishe, updateDishe, deleteDishe, deleteAllDishes , getDishe}