import argparse
import threading
import time
import urllib.parse

import requests
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
    a_tags = driver.find_elements_by_xpath('//*[@id="siteList"]//a')

    item = []
    for a in a_tags:
        url = a.get_attribute('href')
        parsed_url = urllib.parse.urlparse(url)
        query_params = urllib.parse.parse_qs(parsed_url.query)

        if "u" in query_params:
            url = query_params["u"][0]

        item.append(url)

    urls = checkUrls(item)
    data = ",".join(str(i) for i in urls)
    print("'" + data + "'")

    driver.quit()


def checkUrls(urls):
    results = []
    threads = []

    for url in urls:
        thread = threading.Thread(target=checkUrlValid, args=(url, results))
        thread.start()
        threads.append(thread)

    for thread in threads:
        thread.join()

    return results


def checkUrlValid(url: str, results):
    try:
        response = requests.get(url=url, timeout=5)
        if response.status_code == 200:
            results.append(url)
        else:
            pass
    except requests.exceptions.Timeout as e:
        pass
    except requests.exceptions.RequestException as e:
        pass


if __name__ == '__main__':
    arg = argparse.ArgumentParser()
    arg.add_argument('--url', type=str)
    args = arg.parse_args()

    main(args.url)
