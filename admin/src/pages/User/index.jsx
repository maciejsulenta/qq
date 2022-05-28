import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { userRequest } from "../../requestMethods.js";
import { format } from "timeago.js";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  
  TitleWrap,
  Title,
  Button,
  UserContainer,
  UserShow,
  Top,
  Bottom,
  ImgShow,
  UsernameShow,
  ShowTitle,
  InfoWrap,
  InfoTitle,
  UpdateWrap,
  Form,
  UpdateTitle,
  Left,
  Right,
  Item,
  Label,
  Input,
  Upload,
  UpdateImg,
} from "./User.js";
import { Container } from "../../components/Container";
export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );

  return (
    <Container padd>
      <TitleWrap>
        <Title>Panel edycji użytkownika</Title>
        <Link to="/newUser">
          <Button>Stwórz użytkownika</Button>
        </Link>
      </TitleWrap>
      <UserContainer>
        <UserShow>
          <Top>
            <ImgShow
              src={user.img || "https://pomagamy.se/image/NoUser.webp"}
              alt="user avatar"
            />
            <UsernameShow>{user.username}</UsernameShow>
          </Top>
          <Bottom>
            <ShowTitle>Dane szczegółowe</ShowTitle>
            <InfoWrap>
              <PermIdentity />
              <InfoTitle>{user.name}</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <CalendarToday />
              <InfoTitle>{format(user.createdAt)}</InfoTitle>
            </InfoWrap>
            <ShowTitle>Dane kontaktowe</ShowTitle>
            <InfoWrap>
              <PhoneAndroid />
              <InfoTitle>{user.phone}</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <MailOutline />
              <InfoTitle>{user.email}</InfoTitle>
            </InfoWrap>
            <InfoWrap>
              <LocationSearching />
              <InfoTitle>{user.address}</InfoTitle>
            </InfoWrap>
          </Bottom>
        </UserShow>
        <UpdateWrap>
          <UpdateTitle>Zobacz</UpdateTitle>
          <Form>
            <Left>
              <Item>
                <Label>Login</Label>
                <Input type="text" placeholder={user.username} />
              </Item>
              <Item>
                <Label>Imię i nazwisko</Label>
                <Input type="text" placeholder={user.name} />
              </Item>
              <Item>
                <Label>Email</Label>
                <Input type="text" placeholder={user.email} />
              </Item>
              <Item>
                <Label>Numer telefonu</Label>
                <Input type="text" placeholder={user.phone} />
              </Item>
              <Item>
                <Label>Adres zamieszkania</Label>
                <Input type="text" placeholder={user.address} />
              </Item>
            </Left>
            <Right>
              <Upload>
                <UpdateImg
                  src={user.img || "https://pomagamy.se/image/NoUser.webp"}
                  alt="user avatar"
                />
                <Label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </Label>
                <Input file type="file" id="file" />
              </Upload>
              <Button>Aktualizuj</Button>
            </Right>
          </Form>
        </UpdateWrap>
      </UserContainer>
    </Container>
  );
}
