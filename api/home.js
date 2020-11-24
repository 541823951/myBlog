import { getAPI, postAPI } from './net/http';


export const getArticleList = data=>{
	return getAPI('/default/getArticleList',data)
}