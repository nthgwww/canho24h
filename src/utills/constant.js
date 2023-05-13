export const path = {
  HOME: "/*",
  LOGIN: "login",
  CHO_THUE_CAN_HO: "cho-thue-can-ho",
  CHO_THUE_MAT_BANG: "cho-thue-mat-bang",
  NHA_CHO_THUE: "nha-cho-thue",
  CHO_THUE_PHONG_TRO: "cho-thue-phong-tro",
};

export const text = {
  HOME_TITLE: 'Kênh thông tin mặt bằng, căn hộ và phòng trọ số 1 UTC2',
  HOME_DESCRIPTION:'Kênh thông tin mặt bằng số 1 - đăng tin cho thuê mặt bằng, căn hộ và phòng trọ chuẩn xác, tìm kiếm nhanh với 10.000+ bài đăng và 1.000.000 lượt xem mỗi ngày.'
}

export const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};
