"use client";

import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email({ message: "Adresse mail invalid" }),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"]),
});

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "john.doe",
      email: "john.doe@gmail.com",
      phone: "+1 234 5678",
      location: "New York, NY",
      role: "admin",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <SheetContent className="p-2">
      <SheetHeader>
        <SheetTitle className="">Edit User</SheetTitle>
      </SheetHeader>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-4">
        <FieldGroup>
          {/* USERNAME */}
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Username</FieldLabel>
                <Input {...field} />
                <FieldDescription>
                  This is your public username.
                </FieldDescription>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* EMAIL */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>
                <Input {...field} />
                <FieldDescription>
                  Only admin can see your email.
                </FieldDescription>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* PHONE */}
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Phone</FieldLabel>
                <Input {...field} />
                <FieldDescription>
                  Only admin can see your phone number.
                </FieldDescription>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* LOCATION */}
          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Location</FieldLabel>
                <Input {...field} />
                <FieldDescription>
                  This is the public location.
                </FieldDescription>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* ROLE (IMPORTANT 🔥) */}
          <Controller
            name="role"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Role</FieldLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>

                <FieldDescription>
                  Only verified users can be admin.
                </FieldDescription>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        <Button type="submit" className="text-lg cursor-pointer">
          Submit
        </Button>
      </form>
    </SheetContent>
  );
};

export default EditUser;
