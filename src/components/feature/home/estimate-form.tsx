"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { sendSlackMessage } from "@/lib/slack";
import { toast } from "sonner";
import { Icons } from "@/components/ui/icons";

function EstimateForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEstimate, setIsEstimate] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const formSchema = z.object({
    content: z.string().min(100, {
      message: "견적에는 100자 이상의 글자가 필요해요",
    }),
    email: z.string().optional(),
    lang: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      email: "",
      lang: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setIsEstimate(true);

    const contentLength = values.content.length;
    const additionalPrice = Math.floor(contentLength / 100) * 1500;
    setPrice(additionalPrice);

    if (values.email) {
      toast("담당자에게 내용을 전달했어요");
      sendSlackMessage(
        "C06BZ5R7M6X",
        "판다알리미",
        "🐼",
        `
        🎉 번역의뢰가 들어왔어요! \n\n• 이메일: *${
          values.email
        }* \n• 신청언어: *${
          values.lang
        }* \n• 견적비용: *${price.toLocaleString()}* 원 
        \`\`\`${values.content}\`\`\``,
      );
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid w-full gap-4">
                  <Textarea
                    placeholder="번역할 웹소설을 넣어주시면 바로 견적을 뽑아드립니다."
                    rows={16}
                    {...field}
                  />
                  {!isEstimate && (
                    <Button type="submit" disabled={isLoading}>
                      {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      견적내기
                    </Button>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isEstimate && (
          <div className="flex flex-col text-center mt-4">
            <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
              번역 비용은 약 <b>{price.toLocaleString()}</b> 원 입니다.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              * 실제 비용은 견적과 상이할 수 있습니다.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="연락 받을 이메일을 입력해주세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lang"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="번역하고 싶은 언어를 입력해주세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center mt-2 gap-2">
              <Button type="submit" disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                의뢰하기
              </Button>
              <Button type="submit" disabled={isLoading} variant="outline">
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                견적내기
              </Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
}

export default EstimateForm;
