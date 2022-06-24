import React from "react";
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { ptBr } from "./locale.config";

export interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

LocaleConfig.locales["pt-br"] = ptBr;

LocaleConfig.defaultLocale = "pt-br";

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme();

    return (
        <CustomCalendar
            renderArrow={(direction) => (
                <Feather
                    name={direction === "left" ? "chevron-left" : "chevron-right"}
                    size={24}
                    color={theme.colors.text}></Feather>
            )}
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10,
            }}
            theme={{
                textMonthFontFamily: theme.fonts.secondary_600,
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,

                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15,
                },
            }}
            firstDay={1}
            minDate={new Date().toDateString()}
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}></CustomCalendar>
    );
}
