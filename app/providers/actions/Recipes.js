export const actions = {
  GET: {
    RECIPES: 'GET_RECIPES',
    REFRESHED_RECIPES: 'REFRESHED_RECIPES',
  },
  PUT: {
    RECIPES: 'PUT_RECIPES',
    LOADING_STATUS: 'PUT_LOADING_STATUS',
  },
  UPLOAD: {
    RECIPES_IMAGES: 'UPLOAD_RECIPES_WITH_IMAGES',
    EDITED_RECIPES_IMAGES: 'UPLOAD_EDITED_RECIPES_WITH_IMAGES',
  },
  DELETE: {
    RECIPES: 'DELETE_RECIPES',
    SINGLE_RECIPES_IMAGE: 'SINGLE_RECIPES_IMAGE',
  },
};

export const getRecipes = () => ({
  type: actions.GET.RECIPES,
});

export const getRefreshedRecipes = () => ({
  type: actions.GET.REFRESHED_RECIPES,
});

export const putRecipes = (posts) => ({
  type: actions.PUT.RECIPES,
  payload: posts,
});

export const uploadRecipeWithImages = (
  recipeType,
  title,
  ingredients,
  description,
  postImages,
) => ({
  type: actions.UPLOAD.RECIPES_IMAGES,
  payload: { recipeType, title, description, ingredients, postImages },
});

export const uploadEditedRecipeWithImages = (
  title,
  description,
  postImages,
  ingredients,
  removedPostImgs,
  postId,
) => ({
  type: actions.UPLOAD.EDITED_RECIPES_IMAGES,
  payload: {
    title,
    description,
    postImages,
    ingredients,
    removedPostImgs,
    postId,
  },
});

export const deleteRecipe = (uuid, postId, postImages) => ({
  type: actions.DELETE.RECIPES,
  payload: { uuid, postId, postImages },
});

export const deleteRecipeImage = (uuid, postId, imageKey, imageKeyWithExt) => ({
  type: actions.DELETE.SINGLE_RECIPES_IMAGE,
  payload: { uuid, postId, imageKey, imageKeyWithExt },
});

export const putLoadingStatus = (isLoading) => ({
  type: actions.PUT.LOADING_STATUS,
  isLoading,
});