/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  TabOne: NavigatorScreenParams<HomeStackParamList>|undefined;
  TabTwo: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  Book: { userId: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList>,
    NativeStackScreenProps<RootStackParamList>
  >;
export interface IBook {
  id: number;
  title: string;
  author: number;
  sample: string;
  price: number;
  rating: number;
  cover: string;
  category: string[];
}
