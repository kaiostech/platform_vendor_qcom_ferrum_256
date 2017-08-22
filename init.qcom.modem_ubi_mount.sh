#!/system/bin/sh

partition="modem"
dir="/firmware"
mtd_file="/proc/mtd"

mtd_block_number=`cat $mtd_file | grep -i $partition | sed 's/^mtd//' | awk -F ':' '{print $1}'`
echo "MTD : Detected block device : $dir for $partition"
mkdir -p $dir

ubiattach -m $mtd_block_number -d 1 /dev/ubi_ctrl
device="/dev/ubi1_0"

while [ 1 ]
    do
        if [ -c $device ]
        then
            mount -t ubifs -o ro,nosuid,nodev,bulk_read $device $dir
            break
        else
            sleep 0.010
        fi
    done

