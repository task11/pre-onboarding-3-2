export type AccountsResponseProps = Array<AccountProps>;

export type AccountProps = {
  assets: string;
  broker_id: string;
  created_at: string;
  id: number;
  is_active: boolean;
  name: string;
  number: string;
  payments: string;
  status: number;
  updated_at: string;
  user_id: number;
  uuid: string;
};

export type ConvertAccountListProps = Array<ConvertAccountProps>;

export type ConvertAccountProps = {
  assets: string;
  broker: string;
  created_at: string;
  is_active: boolean;
  name: string;
  number: string;
  payments: string;
  status: string;
  user_id: number;
};
