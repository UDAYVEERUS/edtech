import React from 'react'

const BlogItem = ({
    data,
}) => {
    const { title,
        descriptionShort,
        description,
        image, } = data
    return (
        <div className="one-blog max-w-3xl border-x-2 border-y-2 lg:ml-4 my-10">
            <div className={`img-pic h-96 bg-[url(${image})]`}>
                {/* <!-- <img src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/blog-1.jpg" alt="" /> --> */}
                <div className="blog-post pt-64">
                    <h1 className="h-16 w-40 bg-blue-700 px-4 py-3 text-3xl font-semibold text-white">15 feb</h1>
                    <h1 className="h-16 w-40 bg-amber-400 px-7 py-3 text-3xl font-semibold">2018</h1>
                </div>
            </div>
            <div className="blog-content m-5 lg:mx-11">
                <h5 className="text-3xl font-semibold">{title}</h5>
                <div className="pic-content my-5 flex justify-between text-lg font-normal lg:w-4/6">
                    <div className="thrice flex">
                        <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emblem-person-yellow.svg/1024px-Emblem-person-yellow.svg.png" alt="" />
                        <h2 className="m-1 text-xl text-gray-500">Alexander</h2>
                    </div>
                    |

                    <div className="thrice flex">
                        <img className="w-8" src="https://png.pngtree.com/png-vector/20220219/ourmid/pngtree-yellow-tag-png-image_4407572.png" alt="" />
                        <h2 className="m-1 text-xl text-gray-500">Alexander</h2>
                    </div>
                    |
                    <div className="thrice flex">
                        <img className="w-8" src="https://d1mx58uh9xwcf2.cloudfront.net/WebPublisher/AssetVault.ashx?UID=119029a7975fae94e4cb4c8806e48db7223" alt="" />
                        <h2 className="m-1 text-xl text-gray-500">Alexander</h2>
                    </div>
                </div>
                <br />
                <hr />
                <p className="m-1 mt-14 text-2xl text-gray-400 lg:w-9/12">{descriptionShort + "...."}</p>
                <button className="mx-1 mt-7 h-16 w-72 rounded-lg bg-amber-400 text-xl font-medium">continue reading</button>
            </div>
        </div>
    )
}

export default BlogItem