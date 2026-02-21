'use client';

import { languages } from '@/app/(default)/resumes/create/_components/languages';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useRoles } from '@/hooks/useRoles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  desc: z.string().min(10, 'Bio is too short').max(500),
  type: z.enum(['Casual', 'Professional']),
  language: z.string().min(1, 'Please select language'),
  roles: z.array(z.string()).min(1, 'Select at least one role'),
});

type FormValues = z.infer<typeof formSchema>;

const Page = () => {
  const { data: roles } = useRoles();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desc: '',
      type: 'Casual',
      language: '',
      roles: [],
    },
  });

  const toggleRole = (id: string) => {
    const current = form.getValues('roles');

    const next = current.includes(id)
      ? current.filter(r => r !== id)
      : [...current, id];

    form.setValue('roles', next, { shouldValidate: true });
  };

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    // await api.createResume(values)
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 align-start"
      >
        {/* DESCRIPTION */}
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                Input_required
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Describe your vacancy, requirements and contacts"
                  className=""
                />
              </FormControl>
              <FormMessage className="text-xs italic color-red"/>
            </FormItem>
          )}
        />

        {/* LANGUAGE */}
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-14 bg-zinc-900/30 border-white/5 rounded-xl uppercase text-[11px] tracking-[0.2em]">
                    <SelectValue placeholder="Access_Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-zinc-950 border-white/10 text-white">
                  {languages.map(item => (
                    <SelectItem
                      key={item.code}
                      value={item.code}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ROLES */}
        <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                Combat_Specialization_Array
              </FormLabel>

              <div className="flex flex-wrap gap-3">
                {roles?.map(role => {
                  const active = field.value.includes(role.id);

                  return (
                    <Badge
                      key={role.id}
                      onClick={() => toggleRole(role.id)}
                      className={`
                        cursor-pointer select-none
                        px-6 py-2 rounded-xl
                        uppercase text-[11px] font-black
                        transition-all
                        ${
                          active
                            ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                            : 'bg-zinc-900 text-zinc-500 border border-white/5 hover:border-white/20'
                        }
                      `}
                    >
                      {role.name}
                    </Badge>
                  );
                })}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* SUBMIT */}
        <Button
          type="submit"
          className="mt-6 px-10 h-14 uppercase tracking-[0.3em] font-black"
        >
          Deploy vacancy
        </Button>
      </form>
    </Form>
  );
};

export default Page;