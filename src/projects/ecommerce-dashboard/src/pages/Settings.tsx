
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useDashboard } from '@/hooks/useDashboard';
import { 
  Store, 
  CreditCard, 
  Bell, 
  Users, 
  Mail, 
  Lock, 
  FileText, 
  Truck, 
  Percent, 
  Save, 
  Loader2 
} from 'lucide-react';

const Settings = () => {
  const { isSubmitting, handleSubmit } = useDashboard();

  const onSaveSettings = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit({}, "Settings saved successfully!");
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your store settings and preferences</p>
        </div>

        <Tabs defaultValue="store" className="space-y-4">
          <TabsList className="flex-wrap">
            <TabsTrigger value="store" className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              Store
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment
            </TabsTrigger>
            <TabsTrigger value="shipping" className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Shipping
            </TabsTrigger>
            <TabsTrigger value="tax" className="flex items-center gap-2">
              <Percent className="h-4 w-4" />
              Tax
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
          </TabsList>

          <TabsContent value="store" className="space-y-6">
            <Card>
              <form onSubmit={onSaveSettings}>
                <CardHeader>
                  <CardTitle>Store Information</CardTitle>
                  <CardDescription>
                    Manage your store details and business information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="store-name">Store Name</Label>
                      <Input id="store-name" defaultValue="CommerceKeeper" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-url">Store URL</Label>
                      <Input id="store-url" defaultValue="https://commercekeeper.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Contact Email</Label>
                      <Input id="contact-email" type="email" defaultValue="info@commercekeeper.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Contact Phone</Label>
                      <Input id="contact-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="store-address">Address</Label>
                    <Textarea id="store-address" defaultValue="123 Commerce St., Suite 100&#10;New York, NY 10001&#10;United States" />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="store-currency">Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="store-currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                        <SelectItem value="cad">CAD (C$)</SelectItem>
                        <SelectItem value="aud">AUD (A$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="store-timezone">Timezone</Label>
                    <Select defaultValue="est">
                      <SelectTrigger id="store-timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="est">Eastern Time (ET)</SelectItem>
                        <SelectItem value="cst">Central Time (CT)</SelectItem>
                        <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                        <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Settings</CardTitle>
                <CardDescription>
                  Configure email templates and notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="order-confirmation">Order Confirmation Email</Label>
                  <Switch id="order-confirmation" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="shipping-confirmation">Shipping Confirmation Email</Label>
                  <Switch id="shipping-confirmation" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="abandoned-cart">Abandoned Cart Reminders</Label>
                  <Switch id="abandoned-cart" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="promotional-emails">Promotional Emails</Label>
                  <Switch id="promotional-emails" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Customize Email Templates</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Providers</CardTitle>
                <CardDescription>
                  Configure your store's payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-blue-100 p-2">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Credit Card</h3>
                      <p className="text-sm text-muted-foreground">Accept Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-blue-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                        <path d="M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.892a2.3 2.3 0 0 1 1.48 1.359l1.665-6.21c.11-.606.691-1.002 1.304-.892.613.11 1.013.688.903 1.294L12.5 19.92a.32.32 0 0 0 .355.297c4.759-.786 8.012-2.595 9.644-5.932.797-1.64.46-5.833-5.931-7.095a.32.32 0 0 0-.36.212L14.016 12.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">PayPal</h3>
                      <p className="text-sm text-muted-foreground">Accept PayPal payments</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-violet-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-600">
                        <path d="M13 17l5-5-5-5" />
                        <path d="M6 17l5-5-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Stripe</h3>
                      <p className="text-sm text-muted-foreground">Accept credit cards via Stripe</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Add Payment Method</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Methods</CardTitle>
                <CardDescription>
                  Configure your store's shipping options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Standard Shipping</h3>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">$5.99</span>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Express Shipping</h3>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">$12.99</span>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Free Shipping</h3>
                    <p className="text-sm text-muted-foreground">For orders over $50</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">$0.00</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Add Shipping Method</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="tax" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Settings</CardTitle>
                <CardDescription>
                  Configure tax rates and rules
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="collect-tax">Collect Tax</Label>
                  <Switch id="collect-tax" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tax-provider">Tax Provider</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger id="tax-provider">
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Automatic Tax Calculation</SelectItem>
                      <SelectItem value="manual">Manual Tax Rates</SelectItem>
                      <SelectItem value="avalara">Avalara</SelectItem>
                      <SelectItem value="taxjar">TaxJar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="p-4 border rounded-lg space-y-4">
                  <h3 className="font-medium">Tax Rates</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="eu">European Union</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                      <Input id="tax-rate" type="number" step="0.01" defaultValue="8.25" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Add Tax Rate</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="new-order">New Order</Label>
                    <Switch id="new-order" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="low-stock">Low Stock Alert</Label>
                    <Switch id="low-stock" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="cancelled-order">Cancelled Order</Label>
                    <Switch id="cancelled-order" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Dashboard Notifications</h3>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="dash-new-order">New Order</Label>
                    <Switch id="dash-new-order" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="dash-review">New Review</Label>
                    <Switch id="dash-review" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="dash-system">System Notifications</Label>
                    <Switch id="dash-system" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Manage who has access to your store dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">JD</span>
                    </div>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge>Admin</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-medium">JS</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Jane Smith</h3>
                      <p className="text-sm text-muted-foreground">jane.smith@example.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Manager</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-medium">RJ</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Robert Johnson</h3>
                      <p className="text-sm text-muted-foreground">robert.j@example.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Support</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Invite Team Member</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
