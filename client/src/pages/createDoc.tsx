import DatePicker from '../components/datePicker';
import TagComponent from '../components/tag';
import React from 'react';
import { useState } from "react"; 
import { Text,VStack,Button,Input } from 'rsuite';

type ClientInfo = {
  id: number;
  fullName: string;
  nationalId: string;
  dateOfBirth: string;
};

type FormData = {
  picture?: string;
  clients: ClientInfo[];
  caseType: 'حقوقی' | 'کیفری';
  proceedingNumber: string;
  phoneNumber: string;
  courtName: string;
};

type Errors = {
  clients: {
    fullName?: string;
    nationalId?: string;
    dateOfBirth?: string;
  }[];
  plaintiff?: string;
  defendant?: string;
  proceedingNumber?: string;
  phoneNumber?: string;
  courtName?: string;
};

const CreateDoc: React.FC = () => {
  const [plaintiffs, setPlaintiffs] = useState<string[]>([]);
  const [defendants, setDefendants] = useState<string[]>([]);
  const [newPlaintiff, setNewPlaintiff] = useState('');
  const [newDefendant, setNewDefendant] = useState('');

  const [formData, setFormData] = useState<FormData>({
    picture: undefined,
    caseType: 'حقوقی',
    proceedingNumber: '',
    phoneNumber: '',
    courtName: '',
    clients: [{ id: 1, fullName: '', nationalId: '', dateOfBirth: '' }],
  });

  const [errors, setErrors] = useState<Errors>({ clients: [] });

  // Add new client
  const addClient = () => {
    const isValid = validateClients();

    if (isValid) {
      const newId = Math.max(0, ...formData.clients.map(c => c.id)) + 1;
      setFormData(prev => ({
        ...prev,
        clients: [...prev.clients, { id: newId, fullName: '', nationalId: '', dateOfBirth: '' }],
      }));
    }
  };

  // Remove client
  const removeClient = (id: number) => {
    setFormData(prev => ({
      ...prev,
      clients: prev.clients.filter(c => c.id !== id),
    }));

    // Update errors array to match current clients
    setErrors(prev => ({
      ...prev,
      clients: prev.clients?.filter((_, index) => formData.clients[index]?.id !== id) || [],
    }));
  };

  // Handle client field change
  const handleClientChange = (id: number, field: keyof ClientInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      clients: prev.clients.map(c => (c.id === id ? { ...c, [field]: value } : c)),
    }));

    // Clear error for this field
    setErrors(prev => {
      const index = formData.clients.findIndex(c => c.id === id);
      if (index < 0 || !prev.clients) return prev;

      const newClientsErrors = [...prev.clients];
      if (!newClientsErrors[index]) newClientsErrors[index] = {};
      newClientsErrors[index] = {
        ...newClientsErrors[index],
        [field]: undefined,
      };
      return { ...prev, clients: newClientsErrors };
    });
  };

  // Validate all clients
  const validateClients = (): boolean => {
    const clientErrors = formData.clients.map(client => {
      const err: { fullName?: string; nationalId?: string; dateOfBirth?: string } = {};

      if (!client.fullName.trim()) err.fullName = 'نام و نام خانوادگی الزامی است';
      if (!client.nationalId.trim()) err.nationalId = 'کد ملی الزامی است';
      else if (!/^\d{10}$/.test(client.nationalId)) err.nationalId = 'کد ملی باید 10 رقم باشد';
      if (!client.dateOfBirth) err.dateOfBirth = 'تاریخ تولد الزامی است';

      return err;
    });

    const hasError = clientErrors.some(err => Object.keys(err).length > 0);
    setErrors(prev => ({ ...prev, clients: clientErrors }));
    return !hasError;
  };

  // Add plaintiff
  const handleAddPlaintiff = () => {
    const trimmed = newPlaintiff.trim();
    if (!trimmed) {
      setErrors(prev => ({ ...prev, plaintiff: 'نام طرف خواهان نمی‌تواند خالی باشد' }));
      return;
    }
    if (plaintiffs.includes(trimmed)) {
      setErrors(prev => ({ ...prev, plaintiff: 'این شخص قبلاً اضافه شده است' }));
      return;
    }
    setPlaintiffs(prev => [...prev, trimmed]);
    setNewPlaintiff('');
    setErrors(prev => ({ ...prev, plaintiff: undefined }));
  };

  // Add defendant
  const handleAddDefendant = () => {
    const trimmed = newDefendant.trim();
    if (!trimmed) {
      setErrors(prev => ({ ...prev, defendant: 'نام طرف خوانده نمی‌تواند خالی باشد' }));
      return;
    }
    if (defendants.includes(trimmed)) {
      setErrors(prev => ({ ...prev, defendant: 'این شخص قبلاً اضافه شده است' }));
      return;
    }
    setDefendants(prev => [...prev, trimmed]);
    setNewDefendant('');
    setErrors(prev => ({ ...prev, defendant: undefined }));
  };

  const removePlaintiffTag = (tag: string) => {
    setPlaintiffs(prev => prev.filter(t => t !== tag));
  };

  const removeDefendantTag = (tag: string) => {
    setDefendants(prev => prev.filter(t => t !== tag));
  };

  // General input change (for non-client fields)
  const handleChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name as Exclude<keyof FormData, 'picture' | 'caseType'>;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, picture: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Full validation
  const validate = (): boolean => {
    const newErrors: Errors = { clients: [] };

    // Validate clients
    newErrors.clients = formData.clients.map(client => {
      const err: { fullName?: string; nationalId?: string; dateOfBirth?: string } = {};
      if (!client.fullName.trim()) err.fullName = 'نام و نام خانوادگی الزامی است';
      if (!client.nationalId.trim()) err.nationalId = 'کد ملی الزامی است';
      else if (!/^\d{10}$/.test(client.nationalId)) err.nationalId = 'کد ملی باید 10 رقم باشد';
      if (!client.dateOfBirth) err.dateOfBirth = 'تاریخ تولد الزامی است';
      return err;
    });

    // Validate others
    if (plaintiffs.length === 0) newErrors.plaintiff = 'حداقل یک طرف خواهان باید اضافه شود';
    if (defendants.length === 0) newErrors.defendant = 'حداقل یک طرف خوانده باید اضافه شود';
    if (!formData.proceedingNumber) newErrors.proceedingNumber = 'شماره پرونده الزامی است';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'شماره تماس الزامی است';
    else if (!/^\d{11}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'شماره تماس باید 11 رقم باشد';
    if (!formData.courtName) newErrors.courtName = 'شعبه قضایی الزامی است';

    setErrors(newErrors);

    return Object.keys(newErrors).every(key => {
      if (key === 'clients') return newErrors.clients.every(e => Object.keys(e).length === 0);
      return !newErrors[key as keyof Omit<Errors, 'clients'>];
    });
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const finalData = {
        ...formData,
        plaintiffs,
        defendants,
      };
      console.log('Form Data Submitted:', finalData);
      alert('اطلاعات با موفقیت ثبت شد!');
    } else {
      console.log('Validation failed', errors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <VStack spacing={10} alignItems="center" className="bg-blue-500 py-5">
          <Text size={30} style={{ color: 'white', textAlign: 'center' }} weight="bold">
            فرم اطلاعات شخصی موکل
          </Text>
          <Text size={15} style={{ color: 'white', textAlign: 'center' }} weight="semibold">
            لطفا اطلاعات را دقیق وارد کنید
          </Text>
        </VStack>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Client Info */}
          {formData.clients.map((client, index) => (
            <div key={client.id} className="space-y-4 border-b border-blue-500 pb-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">موکل {index + 1}</h3>
              <ClientInfo
                client={client}
                error={errors.clients?.[index] || {}}
                onChange={(field, value) => handleClientChange(client.id, field, value)}
                onRemove={formData.clients.length > 1 ? () => removeClient(client.id) : undefined}
              />
            </div>
          ))}

          <Button appearance="primary" color="blue" onClick={addClient} >
            افزودن موکل
          </Button>

          {/* Plaintiff & Defendant */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">طرف خواهان</label>
              <div className="flex gap-3">
                <Input
                  value={newPlaintiff}
                  onChange={setNewPlaintiff}
                  className={`flex-1 ${errors.plaintiff ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="نام خواهان"
                />
                <Button onClick={handleAddPlaintiff}>اضافه</Button>
              </div>
              {errors.plaintiff && <p className="text-sm text-red-500">{errors.plaintiff}</p>}
              <TagComponent list={plaintiffs} onCloseHandler={removePlaintiffTag} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">طرف خوانده</label>
              <div className="flex gap-3">
                <Input
                  value={newDefendant}
                  onChange={setNewDefendant}
                  className={`flex-1 ${errors.defendant ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="نام خوانده"
                />
                <Button onClick={handleAddDefendant}>اضافه</Button>
              </div>
              {errors.defendant && <p className="text-sm text-red-500">{errors.defendant}</p>}
              <TagComponent list={defendants} onCloseHandler={removeDefendantTag} />
            </div>
          </div>

          {/* Proceeding Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">شماره پرونده</label>
            <div className="flex gap-3">
              <Input
                value={formData.proceedingNumber}
                onChange={(value) => handleChange(value, { target: { name: 'proceedingNumber' } } as any)}
                className={`flex-1 ${errors.proceedingNumber ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="شماره پرونده"
              />
            </div>
            {errors.proceedingNumber && <p className="text-sm text-red-500">{errors.proceedingNumber}</p>}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">شماره تلفن</label>
            <div className="flex gap-3">
              <Input
                value={formData.phoneNumber}
                onChange={(value) => handleChange(value, { target: { name: 'phoneNumber' } } as any)}
                className={`flex-1 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="09123456789"
              />
            </div>
            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
          </div>

          {/* Court Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">شعبه قضایی</label>
            <div className="flex gap-3">
              <Input
                value={formData.courtName}
                onChange={(value) => handleChange(value, { target: { name: 'courtName' } } as any)}
                className={`flex-1 ${errors.courtName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="مثلاً: شعبه اول کیفری"
              />
            </div>
            {errors.courtName && <p className="text-sm text-red-500">{errors.courtName}</p>}
          </div>

          {/* Case Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">نوع پرونده</label>
            <select
              value={formData.caseType}
              onChange={(e) => handleChange(e.target.value, e)}
              name="caseType"
              className="w-full px-4 py-3 border border-gray-300 rounded"
            >
              <option value="حقوقی">حقوقی</option>
              <option value="کیفری">کیفری</option>
            </select>
          </div>

          <div className="pt-4">
            <Button
              appearance="primary"
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
            >
              ثبت اطلاعات
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ClientInfo Component (Pure, Reusable)
function ClientInfo({
  client,
  error,
  onChange,
  onRemove,
}: {
  client: ClientInfo;
  error: { fullName?: string; nationalId?: string; dateOfBirth?: string };
  onChange: (field: keyof ClientInfo, value: string) => void;
  onRemove?: () => void;
}) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">نام و نام خانوادگی</label>
        <Input
          value={client.fullName}
          onChange={(v) => onChange('fullName', v)}
          className={`w-full ${error.fullName ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="علی محمدی"
        />
        {error.fullName && <p className="text-sm text-red-500">{error.fullName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">کد ملی</label>
        <Input
          value={client.nationalId}
          onChange={(v) => onChange('nationalId', v)}
          maxLength={10}
          className={`w-full ${error.nationalId ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="1234567890"
        />
        {error.nationalId && <p className="text-sm text-red-500">{error.nationalId}</p>}
      </div>

      <div className=' w-full'>
        <label className="block text-sm font-medium text-gray-700 mb-1">تاریخ تولد</label>
      <DatePicker onChangeHandler={(e)=>{onChange("dateOfBirth",e)}}/>
        {error.dateOfBirth && <p className="text-sm text-red-500">{error.dateOfBirth}</p>}
      </div>

      {onRemove && (
        <Button appearance="ghost" color="red" onClick={onRemove} size="sm">
          حذف موکل
        </Button>
      )}
    </>
  );
}

export default CreateDoc;