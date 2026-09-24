export type Language = 'bn' | 'en';

export type TemplateId = 'classic' | 'royal' | 'modern' | 'professional' | 'elegant';

export type Gender = 'male' | 'female';

export type MaritalStatus = 'unmarried' | 'divorced' | 'widowed' | 'separated';

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  passingYear: string;
  result?: string;
  groupOrMajor?: string;
}

export interface BiodataData {
  id?: string;
  language: Language;
  template: TemplateId;
  createdAt?: string;
  updatedAt?: string;

  // Privacy & Settings
  privacy: {
    isPublic: boolean;
    hidePhoto: boolean;
    hideContact: boolean;
    hideGuardianContact: boolean;
    hideCurrentAddress: boolean;
    isPasswordProtected: boolean;
    password?: string;
    showWatermark: boolean;
    themeColor?: string;
  };

  // 1. Basic / Personal Info
  personal: {
    biodataType: 'male' | 'female'; // পাত্র (Groom) or পাত্রী (Bride)
    fullName: string;
    photoUrl?: string;
    birthDate?: string;
    age: string;
    height: string;
    complexion: string;
    weight?: string;
    bloodGroup?: string;
    maritalStatus: MaritalStatus;
    nationality: string;
    permanentDistrict: string;
    permanentAddress: string;
    presentDistrict: string;
    presentAddress: string;
    specialAttributes?: string; // disabilities or special traits if any
  };

  // 2. Education
  education: {
    educationType: 'general' | 'madrasa' | 'both';
    highestDegree: string;
    details: EducationItem[];
    islamicEducation?: string;
    otherQualifications?: string;
  };

  // 3. Career & Profession
  career: {
    occupation: string;
    designation: string;
    organization: string;
    workLocation: string;
    monthlyIncome?: string;
    careerDescription?: string;
  };

  // 4. Family Background
  family: {
    fatherName: string;
    fatherOccupation: string;
    fatherStatus: 'alive' | 'deceased';
    motherName: string;
    motherOccupation: string;
    motherStatus: 'alive' | 'deceased';
    totalBrothers: string;
    brothersDetails?: string;
    totalSisters: string;
    sistersDetails?: string;
    financialStatus: 'upper_class' | 'upper_middle' | 'middle_class' | 'lower_middle';
    familyType: 'nuclear' | 'joint';
    familyBackgroundDescription?: string;
    maternalUncleInfo?: string;
    paternalUncleInfo?: string;
  };

  // 5. Religion & Lifestyle
  religion: {
    religion: string;
    sectOrMazhab?: string;
    // Islamic specific
    praysFiveTimes?: 'yes' | 'mostly' | 'sometimes' | 'regular';
    quranRecitation?: 'yes' | 'no' | 'learning';
    beardOrHijab?: string;
    halalEarningCommitment?: string;
    // Hindu / Sanatan specific
    caste?: string; // বর্ণ / শাখা / সম্প্রদায় (e.g. Kayastha, Brahmin, Baidya, Saha, Namasudra)
    gotra?: string; // গোত্র (e.g. Sandilya, Kashyapa, Bharadwaja, Alambayana)
    rashiNakshatra?: string; // রাশি / নক্ষত্র
    dietHabit?: 'vegetarian' | 'non_vegetarian' | 'strictly_veg' | string; // আহার (নিরামিষ / আমিষ)
    pujaLifestyle?: string; // পূজা-অর্চনা ও ধর্মীয় আচার
    // General
    hobbiesAndInterests?: string;
    habitsAndLifestyle?: string;
  };

  // 6. Partner Expectations
  expectations: {
    expectedAgeMin?: string;
    expectedAgeMax?: string;
    expectedHeightMin?: string;
    expectedComplexion?: string;
    expectedEducation?: string;
    expectedDistrict?: string;
    expectedProfession?: string;
    expectedMaritalStatus?: string;
    religiousExpectations?: string;
    generalExpectations?: string;
  };

  // 7. Contact Info
  contact: {
    candidatePhone?: string;
    candidateEmail?: string;
    guardianName: string;
    guardianRelation: string;
    guardianPhone: string;
    alternativePhone?: string;
    contactTimePreference?: string;
  };
}

export interface SharedBiodataRecord {
  id: string;
  data: BiodataData;
  createdAt: number;
  views: number;
  isRevoked: boolean;
}
