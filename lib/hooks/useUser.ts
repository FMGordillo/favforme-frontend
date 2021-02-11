import { gql } from "graphql-request";
import { useAuthUser } from "next-firebase-auth";
import useSWR, { mutate } from "swr";
import { User } from "../../lib/types";

interface FirebaseUser {
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  tenantId: string | null;
  photoURL: string | null;
}

interface AuthUser {
  clientInitialized: boolean;
  email: string | null;
  firebaseUser: FirebaseUser | null;
  getIdToken: () => void;
  id: string | null;
  serialize: () => void;
  signOut: () => void;
}

interface UseUserReturn {
  error: any;
  isValidating: boolean;
  user: any; // TODO: Mejorar esto
  firebaseData: AuthUser;
  dbUser: User | undefined;
  firebaseUser: FirebaseUser | null;
  updateUser: (data: { name: string; surname: string; email: string }) => void;
}

const GET_USER = gql`
  query getUser($email: String) {
    user(where: { email: $email }) {
      id
      email
      name
      surname
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($email: String, $name: String, $surname: String) {
    updateUser(
      where: { email: $email }
      data: { name: $name, email: $email, surname: $surname }
    ) {
      id
    }
  }
`;

/**
 * IMPORTANT: Use 'withAuthUser' in your NextJS page to make it work
 *
 * Example:
 *
 * import { withAuthUser } from "next-firebase-auth";
 *
 * export default withAuthUser()(MyPage);
 */
export const useUser = (): UseUserReturn => {
  const firebaseData: AuthUser = useAuthUser();
  const { data, error, isValidating } = useSWR<{ user: User }>(
    firebaseData ? [GET_USER, firebaseData] : null
  );

  const updateUser = async (data: {
    name: string;
    surname: string;
    email: string;
  }) => {
    try {
      mutate(UPDATE_USER, data, false);
    } catch (error) {
      console.log("updateUser FAIL", error);
    }
  };

  return {
    error,
    updateUser,
    isValidating,
    firebaseData,
    user: { ...firebaseData.firebaseUser, ...data?.user },
    dbUser: data?.user,
    firebaseUser: firebaseData?.firebaseUser,
  };
};
