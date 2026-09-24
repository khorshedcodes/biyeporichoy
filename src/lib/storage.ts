import { BiodataData } from '@/types/biodata';

const STORAGE_KEY = 'biyeporichoy_current_biodata';
const SAVED_LIST_KEY = 'biyeporichoy_saved_biodatas';

export const getInitialBiodata = (): BiodataData => {
  return {
    id: `bp-${Date.now().toString(36)}`,
    language: 'bn',
    template: 'classic',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    privacy: {
      isPublic: true,
      hidePhoto: false,
      hideContact: false,
      hideGuardianContact: false,
      hideCurrentAddress: false,
      isPasswordProtected: false,
      password: '',
      showWatermark: false,
      themeColor: '#be123c',
    },
    personal: {
      biodataType: 'male',
      fullName: '',
      photoUrl: '',
      birthDate: '',
      age: '',
      height: '',
      complexion: '',
      weight: '',
      bloodGroup: '',
      maritalStatus: 'unmarried',
      nationality: 'বাংলাদেশী',
      permanentDistrict: '',
      permanentAddress: '',
      presentDistrict: '',
      presentAddress: '',
      specialAttributes: '',
    },
    education: {
      educationType: 'general',
      highestDegree: '',
      details: [
        {
          id: 'edu-init-1',
          degree: '',
          institution: '',
          passingYear: '',
          result: '',
          groupOrMajor: '',
        },
      ],
      islamicEducation: '',
      otherQualifications: '',
    },
    career: {
      occupation: '',
      designation: '',
      organization: '',
      workLocation: '',
      monthlyIncome: '',
      careerDescription: '',
    },
    family: {
      fatherName: '',
      fatherOccupation: '',
      fatherStatus: 'alive',
      motherName: '',
      motherOccupation: '',
      motherStatus: 'alive',
      totalBrothers: '',
      brothersDetails: '',
      totalSisters: '',
      sistersDetails: '',
      financialStatus: 'middle_class',
      familyType: 'nuclear',
      familyBackgroundDescription: '',
      maternalUncleInfo: '',
      paternalUncleInfo: '',
    },
    religion: {
      religion: 'ইসলাম',
      sectOrMazhab: 'সুন্নি (হানাফী)',
      praysFiveTimes: 'regular',
      quranRecitation: 'yes',
      beardOrHijab: '',
      halalEarningCommitment: '',
      hobbiesAndInterests: '',
      habitsAndLifestyle: '',
    },
    expectations: {
      expectedAgeMin: '',
      expectedAgeMax: '',
      expectedHeightMin: '',
      expectedComplexion: '',
      expectedEducation: '',
      expectedDistrict: '',
      expectedProfession: '',
      expectedMaritalStatus: '',
      religiousExpectations: '',
      generalExpectations: '',
    },
    contact: {
      candidatePhone: '',
      candidateEmail: '',
      guardianName: '',
      guardianRelation: '',
      guardianPhone: '',
      alternativePhone: '',
      contactTimePreference: '',
    },
  };
};

export const loadCurrentBiodata = (): BiodataData => {
  if (typeof window === 'undefined') return getInitialBiodata();
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...getInitialBiodata(), ...parsed };
    }
  } catch (e) {
    console.error('Failed to parse saved biodata', e);
  }
  return getInitialBiodata();
};

export const saveCurrentBiodata = (data: BiodataData): void => {
  if (typeof window === 'undefined') return;
  try {
    const toSave = { ...data, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    saveToSavedList(toSave);
  } catch (e) {
    console.error('Failed to save biodata to localStorage', e);
  }
};

export const getSavedBiodatas = (): BiodataData[] => {
  if (typeof window === 'undefined') return [];
  try {
    const list = localStorage.getItem(SAVED_LIST_KEY);
    if (list) {
      return JSON.parse(list);
    }
  } catch (e) {
    console.error('Failed to get saved biodatas list', e);
  }
  return [];
};

export const saveToSavedList = (data: BiodataData): void => {
  if (typeof window === 'undefined') return;
  try {
    const currentList = getSavedBiodatas();
    const index = currentList.findIndex((item) => item.id === data.id);
    let updatedList: BiodataData[];
    if (index >= 0) {
      updatedList = [...currentList];
      updatedList[index] = data;
    } else {
      updatedList = [data, ...currentList].slice(0, 10);
    }
    localStorage.setItem(SAVED_LIST_KEY, JSON.stringify(updatedList));
  } catch (e) {
    console.error('Failed to update saved biodatas list', e);
  }
};

export const deleteSavedBiodata = (id: string): void => {
  if (typeof window === 'undefined') return;
  try {
    const currentList = getSavedBiodatas();
    const updatedList = currentList.filter((item) => item.id !== id);
    localStorage.setItem(SAVED_LIST_KEY, JSON.stringify(updatedList));
  } catch (e) {
    console.error('Failed to delete saved biodata', e);
  }
};
