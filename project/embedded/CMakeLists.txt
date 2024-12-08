cmake_minimum_required(VERSION 3.13)
set(PICO_BOARD pico_w)

include(lib/--force/pico_sdk_init.cmake)
include(lib/pico-extras/external/pico_extras_import.cmake)


project(Pico_scale C CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_C_STANDARD 11)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)


pico_sdk_init()

add_executable(pico_scale
	src/main.c
	src/adc.c
	src/wifi.c
        )

target_include_directories(pico_scale PRIVATE
        header
        )
target_link_libraries(pico_scale
        pico_cyw43_arch_lwip_threadsafe_background
        pico_lwip_mbedtls
        pico_mbedtls
        pico_stdlib
        hardware_adc
        hardware_sleep
        )
pico_add_extra_outputs(pico_scale)
# enable usb output, disable uart output
pico_enable_stdio_usb(pico_scale 1)
pico_enable_stdio_uart(pico_scale 0)

# Ignore files 
set_source_files_properties(
        ${PICO_LWIP_PATH}/src/apps/altcp_tls/
        altcp_tls_mbedtls.CPROPERTIES
        COMPILE_OPTIONS "-Wno-unused-result"
)