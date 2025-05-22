import axios from "axios";

const api = axios.create({
    baseURL: "https://sd-tuition-app.onrender.com/api"
});

export const getParentById = (parentId) => {
    return api
    .get(`/parents/${parentId}`)
    .then(({data})=> data);
}

export const postChildByParentId = (newChild, parentId) => {
    return api
    .post(`/parents/${parentId}/children`, newChild)
    .then(({data})=>data);
}

export const updateParentById = (updateParent, parentId) => {
    console.log(updateParent)
    return api
    .patch(`/parents/${parentId}`, updateParent)
    .then(({data})=>data);
}