import { ACCOUNTSTATE } from './constants/accountState';
import { BROKERS } from './constants/brokers';

export const addCommas = (str: string): string => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const convertBroker = (brokerId: string): string => {
  return BROKERS[brokerId as keyof typeof BROKERS];
};

export const convertAccountState = (status: number): string => {
  return ACCOUNTSTATE[status as keyof typeof ACCOUNTSTATE];
};

export const convertDateToKr = (date: string): string => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = 1 + newDate.getMonth();
  const day = newDate.getDate();
  return `${year}년 ${month}월 ${day}일 `;
};

export const maskingName = (name: string): string => {
  if (name.length <= 2) return name;

  return name.replace(/(?<=.{2})./gi, '*');
};
