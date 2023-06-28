"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/api/users/${params?.id}/items`);
      const data = await response.json();

      setUserItems(data);
    };

    if (params?.id) fetchItems();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Bienvenido a la página de perfil personalizado de ${userName}`}
      data={userItems}
    />
  );
};

export default UserProfile;