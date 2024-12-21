import { Select } from "@/components/ui/select";
import { supabase } from "@/lib/supabase/supabase";
import { Tables } from "@/types/database.types";
import { useEffect, useState } from "react";

type Props = {
  onValueChange: (value: string) => void;
  defaultValue: string;
  isError: boolean;
  className?: string;
};

export function FacilitiesSelect({
  onValueChange,
  defaultValue,
  isError,
  className,
}: Props) {
  const [facilities, setFacilities] = useState<Tables<"facilities">[]>([]);

  useEffect(() => {
    async function fetchFacilities() {
      const { data, error } = await supabase.from("facilities").select("*");
      if (error) {
        console.error("Error fetching facilities", error);
        return;
      }

      setFacilities(data);
    }

    fetchFacilities();
  }, []);

  return (
    <Select
      items={facilities.map((facility) => ({
        label: facility.name_jp,
        value: facility.id,
      }))}
      placeholder={{ label: "施設を選択", value: "" }}
      value={defaultValue}
      onValueChange={onValueChange}
      className={className}
      isError={isError}
    />
  );
}
