import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import OverLayComponent from "../../../app/components/day5/OverLayComponent";
import CustomeMarker from "../../../app/components/day5/customeMarker";

const apartmentDataEuless = [
  {
    id: 1,
    longitude: -97.08689,
    latitude: 32.837071,
    price: 130,
    title: "Spacious Apartment near Parks",
    description:
      "Spacious Apartment is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhVOzJG309LlatjQf9m2dzgnCptLDteoahuZ0-XLq0l1YhWJP4Ple&usqp=CAE&s",
  },
  {
    id: 2,
    longitude: -97.101332,
    latitude: 32.837841,
    price: 110,
    title: "Modern Condo with Amenities",
    description:
      "Modern Condo with Amenities is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.8,
    image:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixPdSl7.SV8A/v1/-1x-1.jpg",
  },
  {
    id: 3,
    longitude: -97.101603,
    latitude: 32.846494,
    price: 95,
    description:
      "Cozy Townhouse in Quiet Neighborhood is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    title: "Cozy Townhouse in Quiet Neighborhood",
    starRating: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OGLtxKDmsjIoUxpbFRDp9-lI22F2FwRF_Q&usqp=CAU",
  },
  {
    id: 4,
    longitude: -97.09812,
    latitude: 32.832504,
    price: 150,
    title: "Luxury Penthouse with Skyline Views",
    description:
      "Luxury Penthouse with Skyline Views is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 5.0,
    image:
      "https://images1.apartments.com/i2/v6PcqsPwuvK4g25854qcgytsNVSdKl2WXeM7YDB2QbA/111/image.jpg",
  },
  {
    id: 5,
    longitude: -97.095726,
    latitude: 32.830667,
    price: 120,
    title: "Riverside Retreat with Private Patio",
    description:
      "Riverside Retreat with Private Patio is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.7,
    image:
      "https://images1.apartments.com/i2/-UI0sUCRYD0RqvdDDRgeKaMpTGjfdbAFDT0v4QH_f-A/111/parkhouse-apartment-homes-thornton-co-building-photo.jpg?p=1",
  },
  {
    id: 6,
    longitude: -97.09411,
    latitude: 32.82471,
    price: 80,
    title: "Quaint Cottage in Historic District",
    description:
      "Quaint Cottage in Historic District is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.0,
    image:
      "https://images.squarespace-cdn.com/content/v1/651ec56bfbaffe41c352b587/efc9bf10-34a5-4293-9b4e-7a06e0f2bc1c/11-Aston+Place-POI-005.jpg",
  },
  {
    id: 7,
    longitude: -97.098599,
    latitude: 32.833832,
    price: 100,
    title: "Elegant Condo with Pool Access",
    description:
      "Elegant Condo with Pool Access is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.3,
    image:
      "https://www.essexapartmenthomes.com/-/media/Project/EssexPropertyTrust/Sites/EssexApartmentHomes/Homepage/Hero1_Velo-on-Ox_1920x800",
  },
  {
    id: 8,
    longitude: -97.094789,
    latitude: 32.826429,
    price: 85,
    title: "Sunny Apartment with Garden View",
    description:
      "Sunny Apartment with Garden View is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.1,
    image:
      "https://images.adsttc.com/media/images/637c/cc4e/db20/0f35/7400/b765/large_jpg/housing-apartment-at-badade-nagar-studio-frozen-music_1.jpg?1669123187",
  },
  {
    id: 9,
    longitude: -97.07031,
    latitude: 32.83271,
    price: 180,
    title: "Crest Oasis - Luxury Living",
    description:
      "Crest Oasis - Luxury Living is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.9,
    image:
      "https://www.thehousedesigners.com/images/plans/01/EEA/bulk/7855/3019_3_m.webp",
  },
  {
    id: 10,
    longitude: -97.091167,
    latitude: 32.834459,
    price: 95,
    title: "Manchester Apartment - City Vibes",
    description:
      "Manchester Apartment  is Very fantatistc apartment. You can get nice apartment and nice service an affordable price",
    starRating: 4.5,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504641439.jpg?k=c6006a9a0c457de92606776eac6e0f08b8871a7d0e00357bb25331714191fff0&o=&hp=1",
  },
  // Add more properties as needed
];

const MapViewPage = () => {
  const [selectedAprt, setSelectedAprt] = useState(null);
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Map", headerBackTitleVisible: false }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 32.83271,
          longitude: -97.07031,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {apartmentDataEuless.map((item: any, index) => (
          <CustomeMarker
            key={item.id}
            apartment={item}
            setSelectedAprt={setSelectedAprt}
          />
        ))}
      </MapView>
      {selectedAprt && <OverLayComponent apartment={selectedAprt} />}
    </View>
  );
};

export default MapViewPage;

const styles = StyleSheet.create({});
