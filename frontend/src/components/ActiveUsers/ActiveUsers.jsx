import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";



function ActiveUsers({users}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <User className="h-5 w-5" /> Users
      </h2>
      {users.map((user) => (
        <Card key={user.id} className="bg-gray-50">
          <CardContent className="p-4">
            <p className="text-base font-medium">
              {user.firstname} {user.lastname}
            </p>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );  
  
}

export default ActiveUsers