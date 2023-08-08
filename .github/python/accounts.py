import argparse
import time

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager


def main(url: str):
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--headless')
    chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])
    chrome_options.add_argument('--disable-extensions')

    driver = webdriver.Chrome(ChromeDriverManager().install(), options=chrome_options)
    driver.get(url)
    driver.maximize_window()

    time.sleep(3)
    divs = driver.find_elements_by_xpath('/html/body/main/div[2]/div')

    item = []
    for div in divs:
        account = div.find_element_by_xpath('.//button[1]/span').text
        passwd = div.find_element_by_xpath('.//button[2]/span').text
        item.append(account + ',' + passwd)

    data = ";".join(str(i) for i in item)
    print("'" + data + "'")

    driver.quit()


if __name__ == '__main__':
    arg = argparse.ArgumentParser()
    arg.add_argument('--url', type=str)
    args = arg.parse_args()

    main(args.url)
