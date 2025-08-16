import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Imię i nazwisko musi mieć co najmniej 2 znaki" }),
  email: z.string().email({ message: "Wprowadź poprawny adres email" }),
  phone: z.string().min(9, { message: "Wprowadź poprawny numer telefonu" }),
  message: z.string().min(10, { message: "Wiadomość musi mieć co najmniej 10 znaków" }),
});

type ContactFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const { toast } = useToast();
  
  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Form submission handler
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form data:", data);
    
    // Show success toast
    toast({
      title: "Formularz wysłany!",
      description: "Dziękujemy za wiadomość. Skontaktujemy się z Tobą wkrótce.",
    });
    
    // Close the dialog and reset form
    onOpenChange(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Zamów konsultację</DialogTitle>
          <DialogDescription>
            Wypełnij formularz, a nasz konsultant skontaktuje się z Tobą w ciągu 24 godzin.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i nazwisko</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jan.kowalski@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="123 456 789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wiadomość</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Opisz krótko, czego dotyczy Twoje zapytanie..." 
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-2 pt-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Anuluj
              </Button>
              <Button 
                type="submit"
                className="bg-orange-600 hover:bg-orange-700"
              >
                Wyślij
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
