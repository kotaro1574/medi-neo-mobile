export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      alerts: {
        Row: {
          created_at: string;
          date: string | null;
          hour: number;
          id: string;
          is_alert_enabled: boolean;
          minute: number;
          name: string;
          patient_id: string;
          repeat_setting: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          date?: string | null;
          hour: number;
          id?: string;
          is_alert_enabled?: boolean;
          minute: number;
          name: string;
          patient_id: string;
          repeat_setting?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          date?: string | null;
          hour?: number;
          id?: string;
          is_alert_enabled?: boolean;
          minute?: number;
          name?: string;
          patient_id?: string;
          repeat_setting?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "alerts_patient_id_fkey";
            columns: ["patient_id"];
            isOneToOne: false;
            referencedRelation: "patients";
            referencedColumns: ["id"];
          },
        ];
      };
      drug_histories: {
        Row: {
          created_at: string;
          id: string;
          medication_auth_result: Database["public"]["Enums"]["medication_auth_result_enum"];
          patient_id: string;
          user_id: string | null;
          user_name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          medication_auth_result: Database["public"]["Enums"]["medication_auth_result_enum"];
          patient_id: string;
          user_id?: string | null;
          user_name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          medication_auth_result?: Database["public"]["Enums"]["medication_auth_result_enum"];
          patient_id?: string;
          user_id?: string | null;
          user_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_drug_histories_patient";
            columns: ["patient_id"];
            isOneToOne: false;
            referencedRelation: "patients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_drug_histories_profile";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      drugs: {
        Row: {
          created_at: string;
          id: string;
          image_id: string;
          patient_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_id: string;
          patient_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_id?: string;
          patient_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_drugs_patient";
            columns: ["patient_id"];
            isOneToOne: false;
            referencedRelation: "patients";
            referencedColumns: ["id"];
          },
        ];
      };
      facilities: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          name_en: string;
          name_jp: string;
          plan: Database["public"]["Enums"]["plan_type"];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          name_en: string;
          name_jp: string;
          plan: Database["public"]["Enums"]["plan_type"];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          name_en?: string;
          name_jp?: string;
          plan?: Database["public"]["Enums"]["plan_type"];
          updated_at?: string;
        };
        Relationships: [];
      };
      groups: {
        Row: {
          created_at: string;
          facility_id: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          facility_id: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          facility_id?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      patient_faces: {
        Row: {
          created_at: string;
          face_id: string;
          id: string;
          image_id: string;
          patient_id: string;
        };
        Insert: {
          created_at?: string;
          face_id: string;
          id?: string;
          image_id: string;
          patient_id: string;
        };
        Update: {
          created_at?: string;
          face_id?: string;
          id?: string;
          image_id?: string;
          patient_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_patient_faces_patient";
            columns: ["patient_id"];
            isOneToOne: false;
            referencedRelation: "patients";
            referencedColumns: ["id"];
          },
        ];
      };
      patients: {
        Row: {
          birthday: string;
          care_level: Database["public"]["Enums"]["care_level_enum"];
          created_at: string;
          disability_classification: Database["public"]["Enums"]["disability_classification_enum"];
          facility_id: string;
          first_name: string;
          gender: Database["public"]["Enums"]["gender_enum"];
          group_id: string;
          id: string;
          image_id: string;
          last_name: string;
          updated_at: string;
        };
        Insert: {
          birthday: string;
          care_level: Database["public"]["Enums"]["care_level_enum"];
          created_at?: string;
          disability_classification: Database["public"]["Enums"]["disability_classification_enum"];
          facility_id: string;
          first_name: string;
          gender: Database["public"]["Enums"]["gender_enum"];
          group_id: string;
          id?: string;
          image_id: string;
          last_name: string;
          updated_at?: string;
        };
        Update: {
          birthday?: string;
          care_level?: Database["public"]["Enums"]["care_level_enum"];
          created_at?: string;
          disability_classification?: Database["public"]["Enums"]["disability_classification_enum"];
          facility_id?: string;
          first_name?: string;
          gender?: Database["public"]["Enums"]["gender_enum"];
          group_id?: string;
          id?: string;
          image_id?: string;
          last_name?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_facility";
            columns: ["facility_id"];
            isOneToOne: false;
            referencedRelation: "facilities";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_group";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          facility_id: string;
          id: string;
          image_id: string | null;
          login_id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          facility_id: string;
          id: string;
          image_id?: string | null;
          login_id: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          facility_id?: string;
          id?: string;
          image_id?: string | null;
          login_id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_profiles_facility";
            columns: ["facility_id"];
            isOneToOne: false;
            referencedRelation: "facilities";
            referencedColumns: ["id"];
          },
        ];
      };
      user_faces: {
        Row: {
          created_at: string;
          face_id: string;
          id: string;
          image_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          face_id: string;
          id?: string;
          image_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          face_id?: string;
          id?: string;
          image_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_profiles";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      care_level_enum:
        | "independence"
        | "needs_support_1"
        | "needs_support_2"
        | "needs_nursing_care_1"
        | "needs_nursing_care_2"
        | "needs_nursing_care_3"
        | "needs_nursing_care_4"
        | "needs_nursing_care_5";
      disability_classification_enum:
        | "independence"
        | "disability_level_1"
        | "disability_level_2"
        | "disability_level_3"
        | "disability_level_4"
        | "disability_level_5"
        | "disability_level_6";
      gender_enum: "male" | "female";
      medication_auth_result_enum: "success" | "failure" | "skipped";
      plan_type:
        | "プラン１"
        | "プラン２"
        | "プラン３"
        | "プラン４"
        | "デモプラン";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
