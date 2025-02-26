"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Info } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

enum PlatformTypeEnum {
  STEAM = "Steam",
  GAMEPASS = "Gamepass",
  EPIC = "Epic games",
}

let languages = [
  { value: "english", label: "Inglês" },
  { value: "spanish", label: "Espanhol" },
  { value: "german", label: "Alemão" },
  { value: "russian", label: "Russo" },
  { value: "french", label: "Francês" },
];

const formSchema = z.object({
  realname: z.string().min(2, {
    message: "Nome não informado.",
  }),
  username: z.string().min(2, {
    message: "Nome de usuário muito curto.",
  }),
  platform: z.nativeEnum(PlatformTypeEnum),
  platform_id: z.string().min(5, {
    message: "Id de plataforma inválido.",
  }),
  languages: z.array(z.string()),
  extraLanguages: z.string(),
  birthday: z.string(),
});

export const EnlistmentForm = () => {
  const [date, setDate] = useState<Date>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      platform: undefined,
      platform_id: "",
      languages: [],
      extraLanguages: "",
      birthday: undefined,
      realname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Alert variant="info">
          <Info className="h-4 w-4" />
          <AlertTitle className="mb-2">
            Recrutamento da MIB - Made in Brazil.
          </AlertTitle>
          <AlertDescription>
            Nosso clã lhe dá as boas vindas e esperamos que aqui você encontre
            um lugar onde possa se divertir, aprender e fazer novas amizades.
            <br />
            É nessa insanidade da jogatina onde nos encontramos e esquecemos dos
            problemas diários e passamos a metralhar o time adversário.
            <br />
            Estamos muito felizes de tê-lo(a) aqui conosco.
            <br />
            Lembre-se que nós não pedimos compromisso, jogue quando puder, de
            acordo com seu horário ou disponibilidades - cheque #eventos. <br />
            <br />
            <strong>Este é o começo da sua história na MIB.</strong>
          </AlertDescription>
        </Alert>

        <FormField
          control={form.control}
          name="realname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual o seu nome?</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual sua gamertag/username?</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
                Preencha aqui o nome do seu usuário exatamente como no jogo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Você joga em qual plataforma?</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="plataforma" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(PlatformTypeEnum).map(([key, value]) => (
                      <SelectItem key={key} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platform_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual seu id (Steam/Gamepass/Epic)</FormLabel>
              <FormControl>
                <Input placeholder="id da plataforma" {...field} />
              </FormControl>
              <FormDescription>
                Caso não saiba qual seja, peça orientação de algum dos membros
                do clã.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={({}) => (
            <FormItem>
              <FormLabel>Você fala outros idiomas além do português?</FormLabel>
              {languages.map((_language) => (
                <FormField
                  key={_language.value}
                  control={form.control}
                  name="languages"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={_language.value}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(_language.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...field.value,
                                    _language.value,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== _language.value
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {_language.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
              <FormDescription>
                <FormField
                  control={form.control}
                  name="extraLanguages"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Outros idiomas</FormLabel>
                      <FormControl>
                        <Input placeholder="Outros idiomas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual dia você nasceu?</FormLabel>
              <FormControl>
                <Input type="date" {...field} contentEditable={false} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
