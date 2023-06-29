const Blogs = require("../blogSchema")
const getBlogs = async (request, response, next) => {
    try {
        const { page, perPage } = request.query
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(2, 10),
            sort:{
                created_at:-1
            }
        }
        const blogsResponse = await Blogs.paginate({},options)
        if (blogsResponse) {
            return response.status(200).json({
                data: blogsResponse.docs,
                status: 200,
                total: blogsResponse.total,
                limit: blogsResponse.limit,
                page: blogsResponse.page,
                pages: blogsResponse.pages,
                message: "successfully added"
            })
        }
        return response.status(402).json({
            status: 402,
            message: "Unable to add",
        })

    } catch (Err) {
        return response.status(500).json({
            status: 500 + Err,
            message: "server Error",
        })
    }
}

const getBlogsById = async (request, response, next) => {
    try {
        const blogsResponse = await Blogs.findById(request.params.id)
        if (blogsResponse) {
            return response.status(200).json({
                data: blogsResponse,
                status: 200,
                message: "successfully added"
            })
        }
        return response.status(402).json({
            status: 402,
            message: "Unable to add",
        })

    } catch (Err) {
        return response.status(500).json({
            status: 500 + Err,
            message: "server Error",
        })
    }
}


const getAllBlogsForDashboard = async (request, response, next) => {
    try {
        const blogsResponse = await Blogs.find({})
        if (blogsResponse) {
            return response.status(200).json({
                data: blogsResponse,
                status: 200,
                message: "successfully added"
            })
        }
        return response.status(402).json({
            status: 402,
            message: "Unable to add",
        })

    } catch (Err) {
        return response.status(500).json({
            status: 500 + Err,
            message: "server Error",
        })
    }
}



module.exports = { getBlogs, getBlogsById,getAllBlogsForDashboard }