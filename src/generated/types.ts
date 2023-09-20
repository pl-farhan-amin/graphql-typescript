export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthorPayload = {
  __typename?: 'AuthorPayload';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Maybe<ReviewPayload>>>;
  verified: Scalars['Boolean']['output'];
};

export type GamePayload = {
  __typename?: 'GamePayload';
  id: Scalars['ID']['output'];
  platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  reviews?: Maybe<Array<Maybe<ReviewPayload>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HelloPayload = {
  __typename?: 'HelloPayload';
  text: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGame?: Maybe<GamePayload>;
  deleteGame: Array<Maybe<GamePayload>>;
  updateGame: GamePayload;
};


export type MutationAddGameArgs = {
  input: AddGameInput;
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateGameArgs = {
  input: UpdateGameInput;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Array<Maybe<AuthorPayload>>>;
  game?: Maybe<Array<Maybe<GamePayload>>>;
  getAuthorById?: Maybe<AuthorPayload>;
  getGameById?: Maybe<GamePayload>;
  getReviewById?: Maybe<ReviewPayload>;
  hello?: Maybe<HelloPayload>;
  review?: Maybe<Array<Maybe<ReviewPayload>>>;
};


export type QueryGetAuthorByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetGameByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetReviewByIdArgs = {
  id: Scalars['ID']['input'];
};

export type ReviewPayload = {
  __typename?: 'ReviewPayload';
  author?: Maybe<AuthorPayload>;
  authorId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  game?: Maybe<GamePayload>;
  gameId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type AddGameInput = {
  platform: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateGameInput = {
  id: Scalars['ID']['input'];
  platform: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};
