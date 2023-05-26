import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
} from "./styles";

function Home() {
  return (
    <Container>
      <Header title="APP Filmes" />
      <SearchContainer>
        <Input placeholder="Ex Vingadores" placeholderTextColor="#ddd" />
        <SearchButton>
          <Feather name="search" size={30} color={"#FFF"} />
        </SearchButton>
      </SearchContainer>

      <ScrollView>
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => alert("Hello world")}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
            }}
          />
        </BannerButton>
      </ScrollView>
    </Container>
  );
}

export default Home;
