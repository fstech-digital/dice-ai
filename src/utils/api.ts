const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface HeroEmailData {
  email: string;
}

export interface BetaSignupData {
  name: string;
  email: string;
  channel: string;
  challenge: string;
}

// Hero email capture
export const submitHeroEmail = async (data: HeroEmailData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/hero-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro na requisição');
    }

    return await response.json();
  } catch (error) {
    console.error('Hero email submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro ao enviar email'
    };
  }
};

// Beta signup
export const submitBetaSignup = async (data: BetaSignupData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/beta-signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro na requisição');
    }

    return await response.json();
  } catch (error) {
    console.error('Beta signup submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro ao enviar cadastro'
    };
  }
};