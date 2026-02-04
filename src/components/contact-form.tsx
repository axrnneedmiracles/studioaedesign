'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

const serviceItems = [
    { id: "Blender", label: "Blender" },
    { id: "DaVinci", label: "DaVinci" },
    { id: "After Effects", label: "After Effects" },
    { id: "Canva", label: "Canva" },
    { id: "FL Studio", label: "FL Studio" },
    { id: "Web Dev", label: "Web Dev" },
    { id: "Unity", label: "Unity" },
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  idType: z.string({ required_error: 'Please select a platform.' }),
  userId: z.string().optional(),
  services: z.array(z.string()).optional(),
  company: z.string().optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      userId: '',
      services: [],
      company: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.company) {
      // Bot detected, fail silently.
      return;
    }
    
    const formData = new FormData();
    const { company, ...submissionValues } = values;

    // Append form values to formData. This is needed to bypass CORS issues with Google Apps Script.
    Object.entries(submissionValues).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          formData.append(key, value.join(', '));
        } else {
          formData.append(key, value as string);
        }
      }
    });

    try {
        await fetch("https://script.google.com/macros/s/AKfycbwyC-W9eTjoZphTqeXLe7LQpSWZBFRnbD692vK3No4Rx8MJs94wsFzVrduuQeUz01t0dw/exec", {
            method: 'POST',
            body: formData,
        });
        
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        form.reset();

    } catch (error) {
        console.error('Error submitting form:', error);
        toast({
            title: 'An Error Occurred',
            description: 'There was an error sending your message. Please try again.',
            variant: 'destructive',
        });
    }
  }

  if (!isClient) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-3">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex items-center space-x-3">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-28" />
                </div>
                <div className="flex items-center space-x-3">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
                control={form.control}
                name="idType"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Platform</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a platform" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Instagram">Instagram</SelectItem>
                            <SelectItem value="Discord">Discord</SelectItem>
                            <SelectItem value="Twitter">Twitter</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>User ID</FormLabel>
                    <FormControl>
                    <Input placeholder="Your ID on the platform" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>

        <FormField
            control={form.control}
            name="services"
            render={() => (
                <FormItem>
                <div className="mb-4">
                    <FormLabel>Services Interested In</FormLabel>
                </div>
                <div className="space-y-2">
                    {serviceItems.map((item) => (
                    <FormField
                        key={item.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                        return (
                            <FormItem
                            key={item.id}
                            className="flex flex-row items-center space-x-3 space-y-0"
                            >
                            <FormControl>
                                <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                    return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                            (value) => value !== item.id
                                        )
                                        );
                                }}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">
                                {item.label}
                            </FormLabel>
                            </FormItem>
                        );
                        }}
                    />
                    ))}
                </div>
                <FormMessage />
                </FormItem>
            )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-accent hover:bg-accent/90"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </Form>
  );
}
