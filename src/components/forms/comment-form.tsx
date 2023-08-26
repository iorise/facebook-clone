"use client";

import * as React from "react";
import { User } from "@prisma/client";
import { useInputState } from "@mantine/hooks";
import type { z } from "zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { commentSchema } from "@/lib/validations/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentInput } from "@/components/inputs/comment-input";

interface CommentFormProps {
  currentUser: User | null;
  postId: string | null;
}

type Inputs = z.infer<typeof commentSchema>;

export function CommentForm({ currentUser, postId }: CommentFormProps) {
  const [commentValue, setCommentValue] = useInputState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const queryClient = useQueryClient();

  const { mutateAsync: mutateComment, isLoading } = useMutation({
    mutationFn: async (data: Inputs) =>
      await axios.post(`/api/comment?postId=${postId}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", postId]);
      queryClient.invalidateQueries(["posts"]);
      toast.success("Your Comment has been published.", {
        position: "bottom-left",
      });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = React.useCallback(async () => {
    try {
      await mutateComment({ text: commentValue });
      setCommentValue("");
    } catch (error) {
      console.error(error);
    }
  }, [mutateComment, commentValue]);

  const disabled = isLoading || commentValue.trim() === "";
  return (
    <form onSubmit={onSubmit}>
      <div className="flex item w-full items-center">
        <Avatar className="w-8 h-8 mr-2">
          <AvatarImage
            src={currentUser?.externalImage ?? currentUser?.profileImage ?? ""}
          />
          <AvatarFallback>
            <img src="/images/placeholder.png" alt="placeholder" />
          </AvatarFallback>
        </Avatar>
        <CommentInput
          className="rounded-full text-foreground focus-visible:ring-0"
          ref={inputRef}
          type="text"
          placeholder="Write a comment..."
          value={commentValue}
          onChange={setCommentValue}
          onSubmit={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
