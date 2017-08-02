# Copyright (C) 2011 The Android Open-Source Project
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# config.mk
#
# Product-specific compile-time definitions.
#

include device/qcom/msm8909/BoardConfig.mk

# Set the framebuffer size to 2 for low ram targets
NUM_FRAMEBUFFER_SURFACE_BUFFERS := 3
TARGET_ARCH_LOWMEM := true
TARGET_USES_IMS := false
#add suffix variable to uniquely identify the board
TARGET_BOARD_SUFFIX := _256

TARGET_LDPRELOAD := libNimsWrap.so
HAVE_SYNAPTICS_I2C_RMI4_FW_UPGRADE := true

#Disable below Audio-features for 256 variant
BOARD_SUPPORTS_SOUND_TRIGGER := false

#Use dlmalloc instead of jemalloc for mallocs
MALLOC_IMPL := dlmalloc

#Enables some memory savings.
TARGET_LEAN := true

#Disable NFC
TARGET_USES_QCA_NFC := false
TARGET_ENABLE_SMARTCARD_SERVICE := false

#Disable SVA listen app
AUDIO_FEATURE_ENABLED_LISTEN := false
BOARD_SUPPORTS_SOUND_TRIGGER := false
GET_FRAMEBUFFER_FORMAT_FROM_HWC := true
BOARD_HAL_STATIC_LIBRARIES := libhealthd.msm

#Enables IMS
TARGET_USES_IMS := true
#fota
TARGET_NEED_OEM_FOTA_META := true
ADD_RADIO_FILES ?= true
