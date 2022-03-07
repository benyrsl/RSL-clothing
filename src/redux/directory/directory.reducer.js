const init_state = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.freeimages.com/images/large-previews/37b/encore-1452856.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.freeimages.com/images/large-previews/936/jacket-in-side-1524570.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://burst.shopifycdn.com/photos/black-hightop-LED-shoes.jpg?width=1850&format=pjpg&exif=1&iptc=1",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://burst.shopifycdn.com/photos/woman-outside-brownstone.jpg?width=746&format=pjpg&exif=0&iptc=0",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://burst.shopifycdn.com/photos/stylish-man-in-bow-tie.jpg?width=1850&format=pjpg&exif=1&iptc=1",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = init_state, action) => {
  return state;
};

export default directoryReducer;
