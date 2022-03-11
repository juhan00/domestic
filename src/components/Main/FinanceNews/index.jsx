import React, { useState, useCallback, useEffect } from "react";
import { FinanceNewsWrapper } from "./style";
import Pagination from "@components/Disclosure/Pagination/Pagination";
import ExpertModal from "./ExpertModal";

// const initialRealTimeNewsData = [
//   {
//     emotion: "positive",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "negative",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "neutral",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "negative",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "positive",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },

//   {
//     emotion: "neutral",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "positive",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "negative",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "neutral",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "negative",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "positive",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
// ];

// const initialNewsListData = [
//   {
//     emotion: "negative",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
//   {
//     emotion: "positive",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },

//   {
//     emotion: "neutral",
//     press: "조선일보",
//     date: "2022.2.25 11:48 PM",
//     tagRelated: "TM",
//     tagcategory: "경제",
//     tagkeyword: "유엔총회, 결의안 채택, 러시아",
//     title: "카카오게임즈 '이터널 리턴' 48번째 신규 캐릭터 '띠아' 출시",
//     preview:
//       "이밖에 '이터널 리턴' 굿즈 상점에서 게임 내 각종 마스코트 캐릭터로 제작된 인형, 머그컵 등을 31일까지 사전 주문할 수 있다. '이터널 리턴'은 최대 18명의 플레이어가 각종 전략 전투를 활용해 최후의 1인 혹은 1팀을 가려내는 게임이다.",
//     link: "http://reuters.com",
//     enTagRelated: "TM",
//     enTagcategory: "Business & IndustrialEnergy & Utilities",
//     enTagkeyword: "urges, russia, products",
//     enTitle:
//       "Ukraine Vice PM urges Apple to cut products, services supply in Russia",
//     enPreview:
//       "Logo of an Apple store is seen as Apple Inc. reports fourth quarter earnings in Washington, U.S., January 27, 2022. REUTERS/Joshua RobertsFeb 25 (Reuters) - Ukraine's Vice Prime Minister on Friday urged Apple Inc (AAPL.O) top boss Tim Cook to cut supply of its products and block access to App Store in Russia. read more'In 2022, modern technology is perhaps the best answer to the tanks, multiple rocket launchers (hrad) and missiles,' Fedorov said. We're doing all we can for our teams...and will be supporting local humanitarian efforts,' Cook had tweeted on Thursday. read moreRegister now for FREE unlimited access to Reuters.com RegisterReporting by Eva Mathews in Bengaluru; Editing by Shinjini GanguliOur Standards: The Thomson Reuters Trust Principles.",
//   },
// ];

const FinanceNews = ({ type, data }) => {
  const initialIsActiveFilter = {
    positive: true,
    negative: true,
    neutral: true,
  };

  const initialListData = {
    initialData: data.realTime,
    filterList: [],
    sliceList: [],
  };

  const initialIsActiveExpert = {
    index: null,
    active: false,
  };

  const [isActiveTab, setIsActiveTab] = useState("realTime");
  const [isActiveFilter, setIsActiveFilter] = useState(initialIsActiveFilter);
  const [isActiveList, setIsActiveList] = useState(null);
  const [isActiveExpert, setIsActiveExpert] = useState(null);
  const [listData, setListData] = useState(initialListData);
  const [isActiveModal, setIsActiveModal] = useState(false);

  //pagination set
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const isActiveTabHandler = useCallback(
    (value) => {
      if (value === "realTime") {
        setIsActiveTab("realTime");
        setListData({ ...listData, initialData: initialRealTimeNewsData });
        setIsActiveList(null);
      } else {
        setIsActiveTab("newsList");
        setListData({ ...listData, initialData: initialNewsListData });
        setIsActiveList(null);
      }
    },
    [isActiveTab],
  );

  const isActiveFilterHandler = useCallback(
    (value) => {
      const isCheckFilter = Object.keys(isActiveFilter).filter(
        (item) => isActiveFilter[item] === true,
      );
      if (value === "positive") {
        if (isCheckFilter.length === 1 && isCheckFilter[0] === value) {
          return;
        }
        setIsActiveFilter({
          ...isActiveFilter,
          positive: !isActiveFilter.positive,
        });
      } else if (value === "negative") {
        if (isCheckFilter.length === 1 && isCheckFilter[0] === value) {
          return;
        }
        setIsActiveFilter({
          ...isActiveFilter,
          negative: !isActiveFilter.negative,
        });
      } else if (value === "neutral") {
        if (isCheckFilter.length === 1 && isCheckFilter[0] === value) {
          return;
        }
        setIsActiveFilter({
          ...isActiveFilter,
          neutral: !isActiveFilter.neutral,
        });
      }
    },
    [isActiveFilter],
  );

  const isActiveListHandler = useCallback(
    (index) => {
      if (isActiveList === index) {
        setIsActiveList(null);
      } else {
        setIsActiveList(index);
      }
    },
    [isActiveList],
  );

  const isActiveExpertHandler = useCallback(
    (index) => {
      if (isActiveExpert === index) {
        setIsActiveExpert(null);
      } else {
        setIsActiveExpert(index);
      }
    },
    [isActiveExpert],
  );

  useEffect(() => {
    const filterList = listData.initialData.filter(
      (data) => isActiveFilter[data.emotion] === true,
    );
    const sliceList = filterList.slice(offset, offset + limit);
    setListData({ ...listData, filterList, sliceList });
  }, [listData.initialData, isActiveFilter, offset, limit]);

  return (
    <FinanceNewsWrapper>
      <ExpertModal
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
      <div className="tabWraper">
        <div className="tab">
          <ul>
            <li
              className={`${isActiveTab === "realTime" && "active"}`}
              onClick={() => isActiveTabHandler("realTime")}>
              실시간뉴스
            </li>
            <li
              className={`${isActiveTab === "newsList" && "active"}`}
              onClick={() => isActiveTabHandler("newsList")}>
              뉴스리스트
            </li>
          </ul>
        </div>
        <div className="filter">
          <div
            className={`toggle ${
              isActiveFilter.positive === true && "positive"
            }`}
            onClick={() => isActiveFilterHandler(`positive`)}>
            긍정
          </div>
          <div
            className={`toggle ${
              isActiveFilter.negative === true && "negative"
            }`}
            onClick={() => isActiveFilterHandler("negative")}>
            부정
          </div>
          <div
            className={`toggle ${isActiveFilter.neutral === true && "neutral"}`}
            onClick={() => isActiveFilterHandler("neutral")}>
            중립
          </div>
        </div>
      </div>
      <ul>
        {listData.sliceList.map((data, index) => (
          <li key={index} className={`${isActiveList === index && "active"}`}>
            <div
              className={`icon ${
                data.emotion === "positive"
                  ? "positive"
                  : data.emotion === "negative"
                  ? "negative"
                  : data.emotion === "neutral" && "neutral"
              }`}></div>
            <div className="contents">
              <div className="info">
                <span className="press">{data.press}</span>
                <span className="date">{data.date}</span>
              </div>
              <div className="title" onClick={() => isActiveListHandler(index)}>
                {type === "domestic"
                  ? data.title
                  : isActiveExpert !== index
                  ? data.enTitle
                  : data.title}
              </div>
              <div className="preview">
                {type === "domestic"
                  ? data.preview
                  : isActiveExpert !== index
                  ? data.enPreview
                  : data.preview}
              </div>
              <div className="tagWrapper">
                <span className="tag related">
                  {type === "domestic" ? data.tagRelated : data.enTagRelated}
                </span>
                <span className="tag category">
                  {type === "domestic" ? data.tagcategory : data.enTagcategory}
                </span>
                <span className="tag keyword">
                  {type === "domestic" ? data.tagkeyword : data.enTagkeyword}
                </span>

                <div className="buttonWrapper">
                  <div
                    className="button origin"
                    onClick={() => window.open(data.link)}>
                    원문보기
                  </div>
                  {type === "global" && (
                    <>
                      <div
                        className="button auto"
                        onClick={() => isActiveExpertHandler(index)}>
                        자동번역
                      </div>
                      <div
                        className="button expert"
                        onClick={() => setIsActiveModal(true)}>
                        전문가번역
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className="arrow"
              onClick={() => isActiveListHandler(index)}></div>
          </li>
        ))}
      </ul>
      <div className="paginationWrapper">
        <Pagination
          total={listData.filterList.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </FinanceNewsWrapper>
  );
};

export default FinanceNews;
